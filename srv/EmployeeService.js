module.exports = cds.service.impl( async function(){
 
    //Step 1: get the object of our odata entities
    const { EmployeeSet } = this.entities;
    this.before('CREATE', EmployeeSet, (req) => {
        var salary = parseInt(req.data.salaryAmount);
        var currencycode = req.data.currencycode
        if(salary > 50000 && currencycode != "USD"){
            req.error("Salary must be less than 50000 USD and Currency must be USD");
        console.log("Employee’s salary must be less than 50000 USD");
        }
        else{
            console.log('Created successfully');
        }
        
    });
    this.after('UPDATE', 'employee', async (data, req) => {
        console.log('Update operation successful');
    });
 
    this.before('DELETE', EmployeeSet, async(req)=>{
        let id=req.data.ID;
        const pastData = await SELECT.from(EmployeeSet).columns('nameFirst').where ({ID:id});
        console.log(pastData[0].nameFirst[0]);
        if(pastData[0].nameFirst[0] == 'S'){
            req.error(500,'Operation Not Possible');
        }else{
            console.log('DELETE Operation Successful');
        }
    })
}
);


