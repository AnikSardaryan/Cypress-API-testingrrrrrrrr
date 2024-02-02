describe('template spec', () => {
  const randomData = Date.now().toString();
  before(()=> {
    cy.addData(randomData);
  })
  

  it('API', function() {
    cy.CreateUser(randomData, this.data).then(response => {
      expect(response.body.email).to.eq(`${randomData}@gmail.com`),
      expect(response.body.name).to.eq(randomData)
      const user_id = response.body.id 
   
     cy.GetUser(user_id).then(response => {
       expect(response.body.email).to.eq(`${randomData}@gmail.com`),
      expect(response.body.name).to.eq(randomData),
      expect(response.body.id).to.eq(user_id)
    })  
    
     cy.DeleteUser(user_id).then(response => {
        expect(response.status).to.eq(204)

})
})         
})
})
