# Identity Check Verification API

This is a Node.js application for triggering Identity Check Verification through the VerifyMyContent API. It uses MongoDB for data persistence and ngrok for exposing the local server during testing.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- ngrok installed (for testing webhook locally)

## Getting Started

1. **Clone this repository:**

    ```bash
    git clone https://github.com/your-username/your-repo.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd your-repo
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file in the root of your project with the following content:**

    ```dotenv
    PORT=3000
    MONGO_URI=mongodb+srv://your-mongo-username:your-mongo-password@cluster0.e5rir3s.mongodb.net/?retryWrites=true&w=majority
    KEY=your-api-key
    SECRET=your-api-secret
    ```

    Replace placeholders like `your-mongo-username`, `your-mongo-password`, `your-api-key`, and `your-api-secret` with your actual information.

## Running the Application

1. **Start your MongoDB server.**

2. **Run the application:**

    ```bash
    npm start
    ```

    The server will run on [http://localhost:3000](http://localhost:3000).

3. **For testing, expose your local server using ngrok:**

    ```bash
    ngrok http 3000
    ```

    Copy the ngrok URL and use it for setting up the webhook endpoint in your VerifyMyContent account.

## Endpoints

### 1. Trigger Identity Check

- **Endpoint:** `/identity-check`
- **Method:** POST
- **Description:** Triggers Identity Check through the VerifyMyContent API.
- **Request Payload:** JSON with `email`.
- **Response:** JSON with the verification URL.

### 2. Webhook Endpoint

- **Endpoint:** `/webhook`
- **Method:** POST
- **Description:** Receives results from the Identity Check webhook.
- **Request Payload:** JSON with `customer_id` and `status`.
- **Response:** Status 200.

## Environment Variables

Create a file called .env with the params

- **MONGO_URI:** MongoDB connection URI.
- **KEY:** Your API key for VerifyMyContent.
- **SECRET:** Your API secret for VerifyMyContent.

## Contributing

If you find issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).


The documentation could be improved with some details.
We could improve the docs for node, since is one of the most used language.
We need to specify that, in NODE we need to stringify the input before Hashing it.