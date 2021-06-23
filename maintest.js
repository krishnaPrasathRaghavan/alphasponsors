import { Organisation } from '../Pages/Organisation';
import { Dashboard } from '../Pages/Dashboard'

const dashboard=new Dashboard()
const organisation=new Organisation()


it('Dashboard',function(){
  dashboard.navigate();
  dashboard.routepaths();
  dashboard.sidebar();
  dashboard.transactions();
})

it('test_allOrganisation',function(){
   dashboard.navigate();
   organisation.addOrg(); 
   organisation.add_edit_sponsor();
     
  })

it('test_Organisation',function(){
     dashboard.navigate();
     organisation.promotions();
     organisation.merchandise(); 
     organisation.orgInfo()
        
})

