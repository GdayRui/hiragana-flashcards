# AWS Amplify Deployment Guide

This guide explains how to deploy the Hiragana Flash Cards application to AWS Amplify using GitHub Actions and CloudFormation.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **GitHub repository** with this code
3. **GitHub Personal Access Token** for repository access

## Setup Instructions

### 1. AWS Credentials Setup

You need to provide AWS credentials to GitHub Actions. Add these as **Repository Secrets** in your GitHub repository:

#### Required GitHub Secrets:
- `AWS_ACCESS_KEY_ID` - Your AWS Access Key ID
- `AWS_SECRET_ACCESS_KEY` - Your AWS Secret Access Key

#### How to create AWS credentials:
1. Go to [AWS IAM Console](https://console.aws.amazon.com/iam/)
2. Create a new IAM user or use existing one
3. Attach the following policies:
   - `AWSCloudFormationFullAccess`
   - `AWSAmplifyFullAccess` 
   - `IAMFullAccess` (for creating Amplify service role)
4. Generate Access Keys for programmatic access
5. Copy the Access Key ID and Secret Access Key

#### How to add secrets to GitHub:
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add `AWS_ACCESS_KEY_ID` with your Access Key ID
5. Add `AWS_SECRET_ACCESS_KEY` with your Secret Access Key

### 2. GitHub Personal Access Token

The deployment needs access to your GitHub repository. GitHub Actions automatically provides a `GITHUB_TOKEN`, but for Amplify to access your repo, you may need a Personal Access Token:

1. Go to [GitHub Personal Access Tokens](https://github.com/settings/tokens)
2. Generate a new token (classic) with these scopes:
   - `repo` (full repository access)
   - `admin:repo_hook` (repository hooks)
3. Copy the token
4. Add it as a GitHub secret named `GH_PAT` (optional - the workflow tries `GITHUB_TOKEN` first)

### 3. Configuration

#### AWS Region
Edit `.github/workflows/deploy.yml` and change the AWS region if needed:
```yaml
env:
  AWS_REGION: 'ap-southeast-2' # Change to your preferred region
```

#### App Name
The default app name is `hiragana-flash-cards`. You can change it in the CloudFormation parameters.

### 4. Custom Domain (Optional)

To use a custom domain:
1. Uncomment the `AmplifyDomain` section in `.aws/amplify-stack.yml`
2. Replace `'yourdomain.com'` with your actual domain
3. Make sure you own the domain and it's configured in Route 53 or your DNS provider

## Deployment

### Automatic Deployment
The workflow triggers automatically on:
- Push to `main` branch
- Pull requests to `main` branch

### Manual Deployment
You can also trigger deployment manually:
1. Go to your GitHub repository
2. Navigate to **Actions** tab
3. Select "Deploy to AWS Amplify" workflow
4. Click **Run workflow**

## What Happens During Deployment

1. **Code Checkout** - Gets the latest code
2. **Dependencies** - Installs npm packages
3. **Build** - Creates production build of the Next.js app
4. **AWS Setup** - Configures AWS credentials
5. **CloudFormation** - Deploys the Amplify infrastructure
6. **URL Generation** - Gets the deployed app URL
7. **PR Comments** - Comments on PRs with preview URLs (for PR deployments)

## Outputs

After successful deployment, you'll get:
- **App URL**: `https://main.{app-id}.amplifyapp.com`
- **Console URL**: Link to AWS Amplify Console
- **App ID**: Unique identifier for your Amplify app

## Monitoring

You can monitor your deployment:
1. **GitHub Actions**: Check the Actions tab for build logs
2. **AWS Amplify Console**: View detailed build logs and app settings
3. **CloudFormation**: See infrastructure stack status

## Troubleshooting

### Common Issues:

1. **Permissions Error**: Ensure your AWS user has the required IAM policies
2. **GitHub Access**: Verify your Personal Access Token has correct permissions
3. **Region Issues**: Make sure you're using a region that supports Amplify
4. **Build Failures**: Check the build logs in Amplify Console for Next.js specific errors

### Useful AWS CLI Commands:
```bash
# Check CloudFormation stack status
aws cloudformation describe-stacks --stack-name hiragana-flash-cards-stack

# Get Amplify app details
aws amplify get-app --app-id {your-app-id}

# List Amplify deployments
aws amplify list-jobs --app-id {your-app-id} --branch-name main
```

## Cost Considerations

AWS Amplify pricing includes:
- **Build minutes**: Free tier includes 1,000 build minutes/month
- **Data storage**: Free tier includes 15 GB/month
- **Data transfer**: Free tier includes 100 GB/month served

For a small application like this, it should fall well within the free tier limits.

## Security Notes

- AWS credentials are stored securely as GitHub secrets
- The IAM role created has minimal necessary permissions
- All connections use HTTPS
- GitHub tokens are automatically masked in logs