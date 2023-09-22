import connectMongoDB from "../../libs/mongodb"
import User from "../../models/users"

export async function POST(request) {
    const { firstName, secondName, email, username, password, dob } = await request.json()
    await connectMongoDB();
    await User.create({ firstName, secondName, email, username, password, dob });
    return NextResponse.json({ message: "User created" }, { status: 201 })
}