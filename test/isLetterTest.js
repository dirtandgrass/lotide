const assertEqual = require('../assertEqual');
const isLetter = require('../isLetter');

assertEqual(isLetter('a'), true);
assertEqual(isLetter('A'), true);

assertEqual(isLetter('1'), false);
assertEqual(isLetter('ā'), true);

assertEqual(isLetter('Ϫ'), true);

assertEqual(isLetter(''), false);
assertEqual(isLetter(' '), false);
assertEqual(isLetter('🧟'), false);
