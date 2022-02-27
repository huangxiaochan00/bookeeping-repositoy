import clone from "@/lib/clone";

// let data: RecordItem[] | undefined = undefined
const recordStore = {
    recordList: [] as RecordItem[],
    fetchRecords() {
        return this.recordList = JSON.parse(
            window.localStorage.getItem("recordList") || "[]") as RecordItem[]
    },
    createRecord(record: RecordItem) {
        const record2 = clone(record);
        record2.createAt = new Date().toISOString();
        this.recordList.push(record2);
        recordStore.saveRecords(this.recordList);
    },
    saveRecords(data: RecordItem[]) {
        window.localStorage.setItem("recordList", JSON.stringify(data));
    },
}
recordStore.fetchRecords()

export default recordStore