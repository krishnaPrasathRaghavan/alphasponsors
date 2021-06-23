///<reference types="cypress" />
export class Dashboard{


navigate(){       
    cy.visit('https://alpha-sponsors.pointsville.com/')
    cy.get(".signin-logo-img").wait(2000)
    cy.get('.form-block').find('.title-block')
  //    .should('have.text','SIGN IN').wait(3000)
    cy.get('.pt-30 > .MuiGrid-root > .input-group > .input-label')
  //    .should('have.text','Email *').wait(3000)
    cy.get('.pt-30 > .MuiGrid-root > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type('admin@pointsville.com')
    cy.get(':nth-child(2) > .MuiGrid-root > .input-group > .input-label')
  //    .should('have.text','Password *').wait(3000)
    cy.get(':nth-child(2) > .MuiGrid-root > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type('Password@123')
    cy.get('.password-eye')
 //     .click().wait(3000)
    cy.get('.remember-me > span')
 //     .should('have.text','Remember me').wait(3000)
    cy.get('.forgot-pwd > a')
 //     .should('have.text','Forgot Password').wait(3000)
    cy.get('.MuiButtonBase-root')
      .should('have.text','SIGN IN')
      .click()
//      .wait(8000)



  //   cy.get(".signin-logo-img").wait(2000)
  //   cy.get('.form-block').find('.title-block')
  //   .should('have.text','SIGN IN').wait(3000)
  //   cy.get('.footer-block > a').should('have.text','SIGN UP NOW')
  //   .click()
  //   .wait(2000)

  //   cy.get('.form-block').find('.title-block')
  //   .should('have.text','SIGN UP').wait(3000)
  //   cy.get('.default-file-type')
  //   .attachFile('test_pic.png');
  //   //name
  //   cy.get('.pt-20 > :nth-child(1) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  //   .type('Testname')
  //   cy.get('.pt-20 > :nth-child(2) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  //   .type('kiwixac953@beydent.com')
  //   cy.get(':nth-child(3) > :nth-child(1) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  //   .type('Pass@123')
  //   cy.get(':nth-child(3) > :nth-child(2) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  //   .type('Pass@123')
  //   cy.get(':nth-child(4) > :nth-child(1) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  //   .type('Test')
  //   cy.get('#mui-component-select-businessType').click()
  //   cy.get('[data-value="sports"]').click()
  //   cy.get('.pb-10 > .MuiGrid-root > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
  //   .type('London')
  //   cy.get('.MuiButton-label').click()
  //   cy.get('.google-recaptcha')
  //   cy.get('[style="width: 304px; height: 78px;"] > div > iframe')


  //   cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click().wait(8000)
  //  // cy.get('#rc-anchor-container')
  //   cy.get('.terms-policy > span').click()
  //   cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click().wait(3000)
  //   cy.get('.MuiButtonBase-root').click()
  //   cy.get('.MuiButton-label').click()
}
routepaths(){      //TO check the froward and bavk arrow to navigate to pages
   
      // DASHBOARD PAGE
      cy.get('.ptv-main',{ timeout: 10000 })
      cy.get('.padd-left8')
        .should('have.text','DashBoard',{ timeout: 5000 })
        .wait(6000)

      //Manage button go to  MANAGE ORGANISATION PAGE
      cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root')
        .should('have.text','Manage')
        .contains('Manage')  
        .click()
        .wait(6000)
      cy.get('.page-title')
        .should('have.text','MANAGE ORGANIZATIONS')
        .wait(6000)

      //CLUB DETAILS PAGE      
      cy.get(':nth-child(1) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title')
        .contains('TESTORG4')
        .click({force: true})
        .wait(6000)

      //  MANAGE ORGANISATION PAGE
      cy.go('back').wait(4000)
      cy.get('.page-title')
        .should('have.text','MANAGE ORGANIZATIONS')
        .wait(6000)
    
        ///DASHBOARD PAGE
      cy.go('back').wait(2000)
      cy.get('.padd-left8')
        .should('have.text','DashBoard',{ timeout: 5000 })
        .wait(6000)

}


sidebar(){
    //Second Icon contains the MANAGE ORGANIZATIONS page
    cy.get('.manage-club-menu-item > a > div',{ timeout: 10000 })
      .click()
    cy.get('.page-title')
      .should('have.text','MANAGE ORGANIZATIONS')
      .wait(4000)

    //Third Icon contains the MANAGE MEMBERS page  
    cy.get('.manage-member-menu-item > a > div')
      .click()
    cy.get('.page-title')
      .should('have.text','MANAGE MEMBERS')
      .wait(4000)
    
    ////Fourth Icon contains the TTRANSACTIONS page
    cy.get('.refresh-menu-item > a > div')
      .click()
    cy.get('.page-title').should('have.text','TRANSACTIONS')
      .wait(4000)
}


transactions(){
    ////Fourth Icon contains the TTRANSACTIONS page
    // cy.get('.refresh-menu-item > a > div',{timeout:10000})
    //   .click()
    // cy.get('.list-page').contains("TRANSACTIONS")
    //  // .wait(2000)


    // cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12')
    //   .find('.MuiPaper-root.table-wrapper.padd-0.MuiPaper-elevation1.MuiPaper-rounded')
   
    //   cy.get('.table-container.muidata-table.trans-cust-body',{timeout:5000})
    //   .contains('Transaction List')

    //  cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)').contains('Organization')
    // .find('.MuiPaper-root.MUIDataTable-paper-6.undefined.MuiPaper-elevation4.MuiPaper-rounded',{timeout:7000})
    //.find('.MuiToolbar-root.MuiToolbar-regular.MUIDataTableToolbar-root-61.MuiToolbar-gutters')
    cy.get('table')

    //check total number of data in the table
    cy.get('table>tbody>tr>td').should('have.length','549')

    //check total number of colums in the table header
    cy.get('table>thead>tr>th').should('have.length','9')
    
    //check the particular value in a cell
    cy.get('table>tbody>tr').eq(3)  //eq(3) row
    .within(function(){
      cy.get('td').eq(4).should('contain.text','1001999900101016') //column
    })


    //display all elements in the table
      cy.get('table>tbody>tr')
        .each(function($row,index,$rows){
          cy.wrap($row).within(function(){
            cy.get('td')
            .each(function($celldata,index,$column){
              cy.log($celldata.text())
          })
       })
      })

      cy.get('.active > div').wait(20000)


}

}
