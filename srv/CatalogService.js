module.exports = cds.service.impl( async function(){
 
    //Step 1: get the object of our odata entities
    const { POs } = this.entities;
    
 
    this.on('getOrderDefaults', async (req,res) => {
        return {
            "OVERALL_STATUS":"N"
        };
    });
    this.on('largestOrder', async (req,res) => {
        try {
            const ID = req.params[0];
            const tx = cds.tx(req);
           
            //SELECT * UPTO 1 ROW FROM dbtab ORDER BY GROSS_AMOUNT desc
            const reply = await tx.read(POs).orderBy({
                GROSS_AMOUNT: 'desc'
            }).limit(1);
 
            return reply;
        } catch (error) {
            return "Error " + error.toString();
        }
    });
 
}
);
