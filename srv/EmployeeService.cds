using { ust.rajavardhan.reddy.db.master} from '../db/datamodel'; 
 
service EmployeeService @(path: 'EmployeeService') {
 

   // @readonly
    entity EmployeeSet as projection on master.employees;
    //@Capabilities : { Deletable: false }
    
 
}