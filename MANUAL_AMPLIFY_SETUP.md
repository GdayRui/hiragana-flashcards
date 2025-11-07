# Manual AWS Amplify Setup Guide

Since GitHub token integration is having issues, we'll create the Amplify app via CloudFormation and then connect the repository manually in the AWS Console.

## Step 1: Run the GitHub Action

The workflow will now create the Amplify app without trying to connect to GitHub automatically.

## Step 2: Manual Repository Connection

After the workflow completes successfully:

### 1. **Go to AWS Amplify Console**
- The workflow will provide the direct console URL
- Or go to: https://console.aws.amazon.com/amplify/

### 2. **Connect Repository**
- Click on your `hiragana-flash-cards` app
- Click **"Connect repository"** or **"Connect branch"**
- Select **GitHub** as the provider
- **Authorize AWS Amplify** to access your GitHub account
- Select repository: `GdayRui/hiragana-flashcards`
- Select branch: `main`

### 3. **Configure Build Settings**
```yaml
version: 1
applications:
  - frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
          - .next/cache/**/*
    appRoot: /
```

### 4. **Environment Variables** (if needed)
- Add any environment variables your app needs
- For this app, no additional env vars are required

### 5. **Deploy**
- Click **"Save and deploy"**
- Wait for the build to complete
- Your app will be available at: `https://main.{app-id}.amplifyapp.com`

## Step 3: Enable Auto-Deploy (Optional)

Once connected, Amplify will automatically:
- ✅ Deploy on every push to `main`
- ✅ Create preview deployments for PRs
- ✅ Provide build logs and monitoring

## Troubleshooting

### If Manual Connection Also Fails:
1. **Check repository visibility**: Make sure it's public or you've granted Amplify access
2. **Verify AWS permissions**: Ensure your AWS user can create Amplify apps
3. **Try different browser**: Sometimes OAuth flows have browser-specific issues

### Alternative: Deploy with Amplify CLI
If manual connection doesn't work, you can use the Amplify CLI:

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Initialize in your project
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

## Benefits of This Approach

- ✅ **Reliable**: Avoids GitHub token permission issues
- ✅ **One-time setup**: Only need to connect repository once
- ✅ **Full features**: Gets all Amplify benefits after connection
- ✅ **Flexible**: Can adjust settings in AWS Console as needed

After the manual connection, your deployment pipeline will work automatically for future pushes!