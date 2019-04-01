import { google } from 'googleapis'
import express from 'express'
import fs from 'fs'

require('dotenv').config()

// const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

const authorize = key =>
  new google.auth.JWT(key.client_email, null, key.private_key, [
    'https://www.googleapis.com/auth/spreadsheets'
  ])

const privatekey = () =>
  new Promise((resolve, reject) =>
    fs.readFile('google-credentials-heroku.json', (err, file) => {
      if (err) {
        reject(err)
      }
      resolve(JSON.parse(file))
    })
  )

const app = express()
app.use(express.json())

app.get('/responses', async (req, res) => {
  const key = await privatekey()
  const jwtClient = await authorize(key)

  jwtClient.authorize(function(err, tokens) {
    if (err) {
      console.error(err)
      return
    } else {
      console.log('Successfully connected!')
    }
  })
  const sheetId = process.env.SHEET_ID
  const sheets = google.sheets('v4')

  let questions = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'A1:DK1'
    },
    (err, { data: { values: values } }) => (questions = values[0])
  )

  let experience = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'A2:A1000'
    },
    (err, { data: { values: values } }) => (experience = values)
  )

  let race = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'AQ2:AQ1000'
    },
    (err, { data: { values: values } }) => (race = values)
  )

  let education = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'B2:B1000'
    },
    (err, { data: { values: values } }) => (education = values)
  )

  let disabled = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'AC2:AC1000'
    },
    (err, { data: { values: values } }) => (disabled = values)
  )

  let gender = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'AO2:AO1000'
    },
    (err, { data: { values: values } }) => (gender = values)
  )

  let age = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'BD2:BD1000'
    },
    (err, { data: { values: values } }) => (age = values)
  )

  let sexuality = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'BG2:BG1000'
    },
    (err, { data: { values: values } }) => (sexuality = values)
  )

  let financialClass = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'P2:P1000'
    },
    (err, { data: { values: values } }) => (financialClass = values)
  )

  let familyType = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'BF2:BF1000'
    },
    (err, { data: { values: values } }) => (familyType = values)
  )

  let industry = {}
  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'BH2:BH1000'
    },
    (err, { data: { values: values } }) => (industry = values)
  )

  sheets.spreadsheets.values.get(
    {
      auth: jwtClient,
      spreadsheetId: sheetId,
      range: 'A2:DK1000'
    },
    function(err, { data: { values: values } }) {
      if (err) {
        console.error('The API returned an error: ' + err)
        res.send({ err: err.Error })
      } else {
        res.send({
          questions,
          respondents: values.length,
          experience,
          education,
          race,
          gender,
          disabled,
          age,
          sexuality,
          familyType,
          industry,
          financialClass,
          responses: values
        })
      }
    }
  )
})

module.exports = {
  path: '/api/',
  handler: app
}
