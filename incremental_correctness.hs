increment :: Integer -> Integer
increment x
  |x == 0      = 1
  |(mod x 2) == 1 = 2 * increment(x `div` 2)
  |otherwise      = x + 1
