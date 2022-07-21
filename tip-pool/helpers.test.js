
    beforeEach(function () {
      billAmtInput.value = 150;
      tipAmtInput.value = 40;
      submitPaymentInfo();
    });




it("should add payment to the total", function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(80);
    })
