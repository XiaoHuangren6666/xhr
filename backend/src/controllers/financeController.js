class FinanceController {
    constructor(financeModel) {
        this.financeModel = financeModel;
    }

    async addFinanceRecord(req, res) {
        const { itemName, amount, source } = req.body;
        try {
            const newRecord = await this.financeModel.createRecord(itemName, amount, source);
            res.status(201).json(newRecord);
        } catch (error) {
            res.status(500).json({ message: 'Error adding finance record', error });
        }
    }

    async getFinanceRecordsByDate(req, res) {
        const { date } = req.params;
        try {
            const records = await this.financeModel.getRecordsByDate(date);
            res.status(200).json(records);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching finance records', error });
        }
    }
}

export default FinanceController;