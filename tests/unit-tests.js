// Unit Tests for Core Business Logic & Booking Mechanics
const assert = require('assert');

// 1. Math and Financial Helpers
function calculateDeposit(total, percentage = 20) {
  if (typeof total !== 'number' || total < 0) return 0;
  return Math.round((total * (percentage / 100)) * 100) / 100;
}

function calculateBalanceDue(total, deposit) {
  const balance = total - deposit;
  return Math.max(0, Math.round(balance * 100) / 100);
}

// 2. Validation Helpers
function isValidPhone(phone) {
  const digits = (phone || '').replace(/\D/g, '');
  return digits.length === 10 || (digits.length === 11 && digits.startsWith('1'));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '');
}

// 3. Slot Conflict Detection
function isSlotAvailable(requestedDate, requestedTime, existingBookings = []) {
  return !existingBookings.some(b => 
    b.slotDate === requestedDate && 
    b.slotTime === requestedTime && 
    b.status !== 'Cancelled'
  );
}

// RUN TESTS
console.log('🧪 Running ECC Automated Unit Tests...\n');

let passed = 0;

// Test 1: Deposit Calculation
assert.strictEqual(calculateDeposit(250, 20), 50.00, 'Deposit calculation failed');
assert.strictEqual(calculateDeposit(199.99, 25), 50.00, 'Deposit rounding failed');
console.log('✅ Test 1 Passed: calculateDeposit correctly handles percentages and rounding');
passed++;

// Test 2: Balance Due Calculation
assert.strictEqual(calculateBalanceDue(250, 50), 200.00, 'Balance due calculation failed');
assert.strictEqual(calculateBalanceDue(100, 100), 0.00, 'Zero balance failed');
assert.strictEqual(calculateBalanceDue(100, 150), 0.00, 'Negative balance boundary failed');
console.log('✅ Test 2 Passed: calculateBalanceDue prevents negative balances');
passed++;

// Test 3: Phone Validation
assert.strictEqual(isValidPhone('(555) 234-5678'), true, 'Valid US phone failed');
assert.strictEqual(isValidPhone('5552345678'), true, 'Valid 10 digits failed');
assert.strictEqual(isValidPhone('12345'), false, 'Short phone was incorrectly allowed');
console.log('✅ Test 3 Passed: isValidPhone correctly validates US formats');
passed++;

// Test 4: Email Validation
assert.strictEqual(isValidEmail('client@example.com'), true, 'Valid email failed');
assert.strictEqual(isValidEmail('bademail.com'), false, 'Invalid email was allowed');
console.log('✅ Test 4 Passed: isValidEmail accurately enforces email syntax');
passed++;

// Test 5: Conflict Detection
const existing = [
  { slotDate: '2026-10-15', slotTime: '10:00 AM', status: 'Confirmed' },
  { slotDate: '2026-10-15', slotTime: '02:00 PM', status: 'Cancelled' }
];
assert.strictEqual(isSlotAvailable('2026-10-15', '10:00 AM', existing), false, 'Double booking allowed');
assert.strictEqual(isSlotAvailable('2026-10-15', '02:00 PM', existing), true, 'Cancelled slot was blocked');
assert.strictEqual(isSlotAvailable('2026-10-15', '04:00 PM', existing), true, 'Free slot was blocked');
console.log('✅ Test 5 Passed: isSlotAvailable prevents calendar collisions');
passed++;

console.log(`\n🎉 ALL ${passed}/5 UNIT TESTS PASSED SUCCESSFULLY!`);
