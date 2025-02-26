import mongoose from 'mongoose'

main().catch((err) => console.log(err))

const main = async () => {
    await mongoose.connect(process.env.DATABASE_URL)
}

export default main
