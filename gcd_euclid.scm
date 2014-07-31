(define (message x)
  (newline)
  (display x))
                  

(define (gcd x y)
  (cond ((= x y) x)
        ((> x y)
          (message (- x y))
          (gcd (- x y) y))
        ((< x y) 
          (message (- y x))
          (gcd x (- y x)))
        (else 0)))

(gcd 111111 1234567)
