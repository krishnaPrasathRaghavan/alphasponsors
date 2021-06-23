///<reference types="cypress" />
export class Organisation{



    addOrg(){
      cy.get('.dashboard-menu-item > a > div',{timeout:10000}).click().wait(6000)
      //org-overview Manage button
     // cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{timeout:10000})
     // cy.get('.manage-club-menu-item > a > div')
     cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root')
        .click()
        .wait(4000)

      //ADD Org button
      cy.get('.btn.btn-primary.add-btn')
        .find('.btn-caption')
        .contains('Add Org')
        .click()
        .wait(3000)

       //check the Heading if the form
      cy.get('.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-elevation24.MuiPaper-rounded')
        .find('.MuiTypography-root.MuiTypography-h6')
        .contains('Add')
        .contains('organization')

      //Add Logo
      cy.get('[name="orgLogo"]')
        .attachFile('test_pic.png');

      //Organisation name
      cy.get('.input-group.case-sensitive')  
        .find('.input-label')
        .contains('Organization Name*')
       
      cy.get('.MuiInputBase-input.MuiInput-input')
        .should('be.visible')
      cy.get('.MuiGrid-grid-sm-4 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('Testclub1')
        .wait(2000)

      //   //Organisation code
      cy.get('.input-group.case-sensitive')  
        .find('.input-label')
        .contains('Organization Code*')
      cy.get('.MuiGrid-grid-sm-4 > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible')
        .type('test2')
        
      cy.get('.MuiGrid-grid-sm-4 > :nth-child(4) > .input-label')
        .should('be.visible')

        //Organisation type
      cy.get('#mui-component-select-orgType').click()
      cy.get('[data-value="resorts"]').click()
    

      // //Points field
      cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('1.05')

        // //Social network field
      cy.get('.input-group.social-url-container')
        .find('.input-label')
         
      cy.get('.fb > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible').wait(3000)
      cy.get('.twitter > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible').wait(3000)

   
          
            //ADD ORG button in form
      cy.get('.MuiDialogActions-root > .btn-primary')
        .contains('ADD ORG')
        .wait(6000)
        //.click()
         //     //Cancel button
        cy.get('.MuiDialogActions-root.MuiDialogActions-spacing')
         .find('.MuiButtonBase-root.MuiButton-root.MuiButton-text.btn.btn-secondary.MuiButton-textPrimary')
         .find('.MuiButton-label')
         //.contains('CANCEL')
         .wait(2000)
         .click()
         .wait(4000)

        cy.get(':nth-child(50) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .align-right > .general-icon')
          .click()
        cy.get('.btn-delete').should('have.text','DEACTIVATE')
          .wait(4000)
        cy.get('.MuiDialogActions-root > :nth-child(2)')
          .should('have.text','APPROVE')
          .wait(4000)
        cy.get('.MuiDialogActions-root > :nth-child(3)')
          .should('have.text','CANCEL')
          .wait(4000)
        cy.get('.MuiDialogActions-root > .btn-primary')
          .should('have.text','UPDATE ORG')
          
          .wait(4000)
    }

    add_edit_sponsor(){
        // cy.get(':nth-child(43) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title')
      cy.get(':nth-child(50) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title')
      .click({force: true})
      .wait(3000)
      
      //click on tab
      cy.get('#simple-tab-0').click()
      
      //check Sponsors List
      cy.get('.table-heading').should('have.text','SPONSORS LIST')
      
      //Add sponsor click
      cy.get('.select-with-label > .btn')
      .click().wait(3000)
      
      //Form goes here
      cy.get('.MuiDialog-container > .MuiPaper-root')
      
      //add logo
      cy.get('.MuiTypography-root').should('have.text','Create Sponsor')
      cy.get('[name="sponsorLogo"]')
        .attachFile('test_pic.png')
        .wait(3000)
      cy.get('.MuiGrid-grid-sm-4 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible')
        .type('merchandide')
      cy.get('.MuiGrid-grid-sm-4 > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible')
        .type('88')
        .wait(2000)
      cy.get('.borderL > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible')
        .type('prince')
      cy.get('.borderL > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('sdkfn@gmail.com')
      cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .should('be.visible')
        .type('995946258')
      cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .type('London')

        //CANCEL BUTTON
        // cy.get('.MuiDialogActions-root > .btn-secondary')
        //   .contains('CANCEL')
        //   .click() 
      cy.get('.MuiDialogActions-root > .btn-primary').click()
      cy.get('.confim-model-container > .MuiPaper-root')
        .contains('Are you sure with the Point Requested value?')


          
        //Confirm Button
        
      cy.get('.confirmation-sec > .MuiDialogActions-root > .btn-primary')
        .contains('CONFIRM')
        .click()
        .wait(4000)

      //EDIT Sponsor
      cy.get(':nth-child(4) > :nth-child(7) > label > .table-edit-icon')
        .click()
        .wait(3000)
      cy.get('.MuiDialog-container > .MuiPaper-root')
        .contains('Edit')
        .contains('Sponsor')
        .wait(3000)
      cy.get('.borderL > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
        .wait(2000)
        

        cy.get('.borderL > :nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
         .type('demo@gmail.com')
         .wait(2000)

        //DELETE BUTTON
        // cy.get('.btn-delete')
        // .contains('DELETE')

        //CANCEL BUTTON
        // cy.get('.MuiDialogActions-root > :nth-child(2)')
        // .contains('CANCEL')
      
        //UPDATE SPONSOR
        // cy.get('.MuiDialogActions-root > .btn-primary')
        cy.get('.MuiDialogActions-root > .btn-primary')
          .click()
          .wait(3000)
        cy.get('.table-wrapper')
          .wait(3000)
       
        //find a particular data in a cell
        cy.get('table>tbody>tr').eq(3)  //eq(3) row
          .within(function(){
            cy.get('td').eq(2).should('contain.text','demo@gmail.com').wait(3000) //column
          })
      
        //Delete a sponsor
        cy.get(':nth-child(4) > :nth-child(7) > label > .table-edit-icon')
          .click()
          .wait(3000)

        cy.get('.MuiDialog-container > .MuiPaper-root')
        cy.get('.btn-delete')
          .click()
          .wait(3000)
        cy.get('.confirmation-sec')
       // .contains('Are you sure you want to delete this Sponsor.By choosing Delete you will loose all the information for merchandide')
          .wait(2000)
        cy.get('.confirmation-sec > .MuiDialogActions-root > .btn-primary')
          .click()
          .wait(4000)
       //back icon
        cy.get('.back-icon').click().wait(6000)
        // cy.get(':nth-child(46) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .MuiGrid-spacing-xs-1 > .MuiGrid-grid-sm-5 > .org-info-section > .data-bold-with-icon > .data-bold')
        // cy.get(':nth-child(50) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .MuiGrid-spacing-xs-1 > .MuiGrid-grid-sm-5 > .org-info-section > .data-bold-with-icon > .data-bold')
        //   .contains(988+88)
        //   .contains('/')
        //   .contains(988+88)
    }


    promotions()
    {
        cy.get('.dashboard-menu-item > a > div',{timeout:10000}).click().wait(6000)
         //org-overview Manage button
        cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{timeout:10000})
        //cy.get('.manage-club-menu-item > a > div')
         .click()
         .wait(6000)

        cy.get(':nth-child(50) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .MuiGrid-spacing-xs-1 > .MuiGrid-grid-sm-5 > .org-info-section > .data-bold-with-icon > .data-bold')
        .contains(400+88+88)
        .contains('/')
        .contains(1000+88+88)    
       
        cy.contains("MANAGE ORGANIZATIONS")
          .should('have.class',"page-title")
          .wait(6000)
        //Click the Pirates title
        //cy.get('.org-title')
        cy.get(':nth-child(50) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title')
          .click({force: true})
          .wait(2000)
  
        //Check Promotions Tab
        cy.get('#simple-tab-1')
          .click()
          .wait(2000)
          
          //---------uncomment-------------/
        cy.get('.MuiTabs-flexContainer')
        cy.get('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit.Mui-selected')
          .find('.MuiTab-wrapper')
          .contains('PROMOTION LIST')
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)')
          .wait(4000)
  
        //check total number of data in the table
        cy.get('table>tbody>tr>td').should('have.length','9')
  
        //check total number of colums in the table header
        cy.get('table>thead>tr>th').should('have.length','9')
  
        //check total number of colums in a single row 
        cy.get('table>tbody>.MuiTableRow-root.pointer>td').should('have.length','9')
  
        //check Hunt List tab
        cy.get('#social-tab-1 > .MuiTab-wrapper')
          .click()
          .wait(3000)
          cy.get('#social-tab-0')
          .click()
          .wait(2000)
  
        cy.get('.MuiTableHead-root > .MuiTableRow-root > :nth-child(1)')
          //.contains('Hunt Codes')
          .wait(2000)
        //  //check total number of data in the table
        //  cy.get('table>tbody>tr>td').should('have.length','8')
  
        //  //check total number of colums in the table header
        //  cy.get('table>thead>tr>th').should('have.length','8')
   
        //  //check total number of colums in a single row 
        //  cy.get('table>tbody>.MuiTableRow-root.pointer>td').should('have.length','8')
   //---------------uncomment------------//
  
        //Check ADD promotion/Hunt
        cy.get('.table-head-section > .MuiGrid-root > .btn')
          .contains('Add Promotion / Hunt')
          .click()
        cy.get('.MuiDialogContent-root.pad0')
        cy.get(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-sm-12")
          .find('#form-dialog-title')
          .contains('CREATE')
          .contains('Promotions')
          .wait(2000)
        //Form in create promotion
        cy.get(':nth-child(1) > .input-group > .input-label')
          .contains('Promotion Type')
      
        cy.get(':nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          //.type('55EEB')
          .should('be.visible')
          .wait(2000)
        cy.get(':nth-child(5) > .input-group > .input-label')
          .contains('No.of') 
          .contains('Promocodes')
          .type('2') 
        cy.get('#mui-component-select-promoType').click({force:true})
        cy.get('[data-value="Hunt"]').click()
        cy.get('#mui-component-select-sponsorId').click()
        cy.get('[data-value="9474c6f5-2f71-44fc-b9e3-541996fa945c"]').click()
        cy.get('#mui-component-select-promoCodePoints').click()
        cy.get('[data-value="400"]').click()
        //   cy.get(':nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
          .type('EEB')
        //  cy.get('#mui-component-select-promoCodePoints')
        //  .should('have.value', 400)
        cy.get('#mui-component-select-validityDay').click()
        cy.get('[data-value="5"]').click()
        cy.get('.css-1hwfws3').click().focused().type('Coimbatore,Tamil Nadu,India',{delay:700}).should('have.length.gte', 1).type('{enter}')
  
        //to cancel
        // cy.get('.MuiDialogActions-root > .btn-secondary')
        // .click()
        //
        cy.get('#mui-component-select-promoType').click({force:true})
        cy.get('[data-value="Email"]').click().wait(3000)
        cy.get('#mui-component-select-sponsorId').click()
        //Add image
        cy.get('[data-value="3838f5fe-6c3e-4ee9-b2fd-7a9fc938f832"]').click()
        cy.get('#mui-component-select-promoCodePoints').click()
        //data value
        cy.get('[data-value="1000"]').click().wait(3000)
        // cy.get(':nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        cy.get('.MuiGrid-spacing-xs-3 > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
           .type('EEB').wait(2000)
       //  cy.get('#mui-component-select-promoCodePoints')
       //  .should('have.value', 400)
        cy.get('#mui-component-select-validityDay').click()
        cy.get('[data-value="5"]').click().wait(2000)
        cy.get('.promo-dynfield-container')
        .contains('Email info')
        cy.get(':nth-child(2) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('pirates@gmail.com')
        cy.get('.info-section > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
        .clear()
        //Print message
        cy.get('.info-section > :nth-child(3) > .input-group > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')

        .type('First Prome')
        cy.get('[rows="3"]')
        .clear()
        cy.get('[rows="3"]')
        .type('Message goes here!!').wait(2000)

       //Promotion Preview
        cy.get('.form-grid > .MuiGrid-item.MuiGrid-grid-xs-12')
       // cy.get('.MuiGrid-grid-sm-9 > .section-heading').contains('First Prom')
        cy.get('.section-heading.sub-heading.email-title').should('have.text','First Prome')
        //Message
        cy.get('.message-preview').should('have.text', 'Message goes here!!').wait(2000)
        cy.get('.promocode-preview').should('have.text', 'EEB1000')
        //check validity
        cy.get('.promo-code-sec > .update-date-txt').should('have.text', 'Valid till 28 Jun 2021').wait(4000)
 
        cy.get('.MuiDialogActions-root > .btn-secondary').click()
     //   cy.get('.MuiDialogActions-root > .btn-primary')
       // .click()
  
      
  
    }
    merchandise(){
          //org-overview Manage button
        //   cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root',{ timeout: 20000 })
        //   .wait(5000)
        //   .click() //org-overview
        // cy.contains("MANAGE ORGANIZATIONS")
        //   .should('have.class',"page-title")
        //   .wait(6000)
        // //Click the Pirates title
        // //cy.get('.org-title')
        // cy.get(':nth-child(43) > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .details-page > .org-title')
        //   .click({force: true})
        //   .wait(2000)
  
      cy.get('#simple-tab-2')
        .click()
        .wait(2000)
      cy.get('.table-wrapper')
        .contains('FAN SHOP LIST')

    // //check total number of data in the table
    // cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr>td').should('have.length','100')

    // //check total number of colums in the table header
    // cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>thead>tr>th').should('have.length','10')

    // //check total number of colums in a single row 
    // cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>#MUIDataTableBodyRow-8>td').should('have.length','10')


    // //display all elements in the table
    // cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr')
    //   .each(function($row,index,$rows){
    //     cy.wrap($row).within(function(){
    //       cy.get('td')
    //       .each(function($celldata,index,$column){
    //         cy.log($celldata.text())
    //     })
    //   })
    // })

    // //get a particular value in a single row
    // cy.get('.MuiTable-root.MUIDataTable-tableRoot-8>tbody>tr').first()
    // .within(function(){
    //   cy.get('td').eq(3).should('contain.text','1000')
    // })

      ///ADD Merchandise button
    cy.get('.import-btn-tile')
    .contains('import')
    cy.get('span')
    .should('have.class','btn-icon')
    cy.get('.btn-highlight')
    .contains('ADD MERCHANDISE')
    .click()  
    .wait(2000)  

    cy.get('.MuiDialog-container > .MuiPaper-root')
    .contains('New Merchandise')
    cy.get('.form-fields.form-field-file.cust-file-type')
      .attachFile('test_pic.png');
    cy.get('#mui-component-select-category')
    .click()
    cy.get('[data-value="Merch"]')  //Hunt
    .click()
      .should('have.text','Merch')
    cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type('Pirates')
    cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
      .type('500')
    cy.get('.merch-listing-box')
    cy.get(':nth-child(1) > .input-group > .merch-cust-capacity')
      .type('Baseball')
    cy.get('.merch-cap-list-card > :nth-child(2) > .input-group')
      .type('brown')
    cy.get(':nth-child(3) > .input-group > .merch-cust-capacity')
      .type('5')
    cy.get(':nth-child(4) > .input-group > .merch-cust-capacity')
      .type('10')
    
    cy.get('.add-merch-list')
      .click()
    cy.get(':nth-child(2) > :nth-child(2) > .input-group > .merch-cust-capacity')
      .type('glove')
    cy.get(':nth-child(2) > :nth-child(3) > .input-group > .merch-cust-capacity')
      .type('Blue')
    cy.get(':nth-child(2) > :nth-child(4) > .input-group > .merch-cust-capacity')
      .type('10')
    cy.get(':nth-child(1) > :nth-child(2) > .input-label').click()
    cy.get('[rows="3"]').type('Tested Review written for about 3 lines')

    cy.get('#mui-component-select-emailVoucher').click()
    cy.get('.MuiList-root > [tabindex="-1"]').click()
    cy.get('#mui-component-select-merFulfillment').click()
    cy.get('.MuiList-root > [tabindex="-1"]').click()
   
        //Cancel
    cy.get('.MuiDialogActions-root > .btn-secondary').wait(4000)
      .click()  

    cy.get(':nth-child(3) > .MuiPaper-root > .MuiGrid-root > .confirmation-sec > .MuiDialogActions-root > .btn-primary').click()

    //Submit button
  //  cy.get('.MuiDialogActions-root > .btn-primary').click().wait(4000)

   // cy.get(':nth-child(3) > .MuiPaper-root > .MuiGrid-root > .confirmation-sec > p')
    //.should('have.text','Are you sure you want to cancel? By cancel this operation, you may lose all changes you made.')
    // cy.get(':nth-child(3) > .MuiPaper-root > .MuiGrid-root > .confirmation-sec > .MuiDialogActions-root > .btn-secondary').click()
    // .wait(3000)
    
    // //confirmation
    // cy.get('.confim-model-container > .MuiPaper-root')
    // cy.get('.confirmation-sec > .MuiDialogActions-root > .btn-primary').click().wait(4000)

    cy.get('table>tbody>tr>td').should('have.length','20')
    cy.get('table>tbody>tr>td').should('have.length','20').wait(5000)


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


    }
    orgInfo(){
    
    //Check Promotions Tab
    cy.get('#simple-tab-4').click().wait(3000)
     .contains('Org Info')
    
     //games
    cy.get('.games-wrapper')
    cy.get('.videostreaming-wrapper > .sec-heading')
      .should('have.text','Video Streaming')
     //.contains('Games')
  
     cy.get('.videostreaming-wrapper')
     .contains('Video Streaming')
  
     cy.get(':nth-child(3) > .MuiGrid-root > .MuiPaper-root')
     .contains('News')

     cy.get('.social-wrapper')
     .contains('Social Network Handles')
     cy.get('#social-tab-1')
      .click()
      .wait(5000)
      cy.get('.twitter-timeline-error').click()
      // cy.get('#social-tab-0')
      // .click()
      // .wait(6000)
  
  
     
      }
  



}
