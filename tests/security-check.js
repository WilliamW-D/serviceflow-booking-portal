// Security Check: Scans project source files for leaked secrets, eval statements, and obvious injection patterns
const fs = require('fs');
const path = require('path');

console.log('🛡️ Running AgentShield / Security Audit Check...\n');

const projectRoot = path.resolve(__dirname, '..');
const forbiddenPatterns = [
  { regex: /sk_live_[0-9a-zA-Z]{24}/, desc: 'Live Stripe Secret Key' },
  { regex: /AIza[0-9A-Za-z-_]{35}/, desc: 'Google Cloud / Maps API Key' },
  { regex: /eval\s*\(/, desc: 'Dangerous eval() call' },
  { regex: /AWS_SECRET_ACCESS_KEY/, desc: 'AWS Secret Key pattern' }
];

let issues = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'tests') continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.js') || entry.name.endsWith('.html') || entry.name.endsWith('.json'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const rule of forbiddenPatterns) {
        if (rule.regex.test(content)) {
          console.error(`❌ Security Violation in ${path.relative(projectRoot, fullPath)}: ${rule.desc}`);
          issues++;
        }
      }
    }
  }
}

scanDir(projectRoot);

if (issues === 0) {
  console.log('✅ Security Audit Passed: No hardcoded credentials or dangerous execution patterns detected in source files.');
  process.exit(0);
} else {
  console.error(`🚨 Security Audit Failed: ${issues} issue(s) detected.`);
  process.exit(1);
}
