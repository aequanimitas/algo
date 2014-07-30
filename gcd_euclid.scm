(define (gcd x y)
  (cond ((= x y) x)
        ((> x y) (gcd (- x y) y))
        ((< x y) (gcd x (- y x)))
        (else 0)))

(gcd 3 4)
