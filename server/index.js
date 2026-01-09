import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import ContactMessage from './models/ContactMessage.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const mongoUri = process.env.MONGO_URI

async function connectDb() {
  if (!mongoUri) {
    console.error('MONGO_URI is not set')
    return
  }
  try {
    await mongoose.connect(mongoUri)
    console.log('MongoDB connected')
  } catch (e) {
    console.error('MongoDB connection error', e.message)
  }
}

connectDb()

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body || {}
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }
  try {
    const doc = await ContactMessage.create({
      name,
      email,
      phone: phone || '',
      subject: subject || '',
      message
    })
    return res.json({ success: true, id: doc._id })
  } catch {
    return res.status(500).json({ success: false, message: 'Server error' })
  }
})

app.get('/api/health', (req, res) => {
  res.json({ ok: true })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
