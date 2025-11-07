# GitHub Personal Access Token Setup

If you encounter errors with the default GITHUB_TOKEN, you'll need to create a Personal Access Token (PAT) for AWS Amplify to access your repository.

## Creating a Personal Access Token

1. **Go to GitHub Settings**:
   - Click your profile picture → Settings → Developer settings → Personal access tokens → Tokens (classic)

2. **Generate New Token**:
   - Click "Generate new token (classic)"
   - Name: `amplify-deployment-token`
   - Expiration: Choose your preference (90 days recommended)

3. **Select Scopes**:
   ```
   ✅ repo (Full control of private repositories)
   ✅ admin:repo_hook (Full control of repository hooks)
   ```

4. **Generate and Copy**:
   - Click "Generate token"
   - **Copy the token immediately** (you won't see it again!)

## Add Token to GitHub Secrets

1. **Go to your repository**:
   - Settings → Secrets and variables → Actions

2. **Add new secret**:
   - Name: `GH_PAT`
   - Value: Your personal access token

## Update Workflow (if needed)

If you created a PAT, update the workflow to use it instead of GITHUB_TOKEN:

```yaml
GitHubToken=${{ secrets.GH_PAT || secrets.GITHUB_TOKEN }}
```

This will try the PAT first, then fall back to the default token.