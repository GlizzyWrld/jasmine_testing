desribe('Calculator should compute correct monthly payments', function(){
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 15000,
      years: 12,
      rate: 5.5
    }
    expect(calculateMonthlyPayment(values)).toEqual('142.53')
  });
  
  
  it('should return a result with 2 decimal places', function() {
    const values = {
      amount: 15050,
      years: 12,
      rate: 5.5
    }
    expect(calculateMonthlyPayment(values)).toEqual('143.00')
  });
  
  /// etc
  it('should calculate high interest rates', function() {
    const values = {
      amount: 55000,
      years: 3,
      rate: 99
    }
    expect(calculateMonthlyPayment(values)).toEqual('4814.95')
  });
})
