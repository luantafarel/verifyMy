# Identity Check Verification API

This is a Node.js application for triggering Identity Check Verification through the VerifyMyContent API. It uses MongoDB for data persistence and Ngrock for exposing the local server during testing.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Ngrock installed (for testing webhook locally)

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
    NGROK=ngrok-url
    ```

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

    Copy the generated ngrok URL to the .env file.

## Endpoints

### 1. Trigger Identity Check

- **Endpoint:** `/identity-check`
- **Method:** POST
- **Description:** Triggers Identity Check through the VerifyMyContent API.
- **Request Payload:** JSON with `email`.
- **Response:** JSON with the verification URL.

### 2. Webhook Endpoint

Should be triggered automatically by the webhook after the user finishes the verification.

- **Endpoint:** `/webhook`
- **Method:** POST
- **Description:** Receives results from the Identity Check webhook.
- **Request Payload:** JSON with `customer_id` and `status`.
- **Response:** Status 200.

## Problems faced
The main problem with this test was triggering the webhook using ngRock since this isn't a real environment. Setting up everything to make it possible for this to work would take some time since I don't have much experience using it. I did the configs for my local environment and made it work but it would take more time for me to figure out how to make it more reliable to external use.

### Improvements to the platform.
The documentation could be improved with some details.
- We could improve the docs for NODE since is one of the most used languages.
- We need to specify that, in NODE we need to stringify the input before Hashing it.
