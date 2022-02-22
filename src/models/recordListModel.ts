import clone from "@/lib/clone";

const recordListModel = {
    data: [] as RecordItem[],
    fetch() {
        return this.data = JSON.parse(
            window.localStorage.getItem("recordList") || "[]") as RecordItem[]
    },
    save(data: RecordItem[]) {
        window.localStorage.setItem("recordList", JSON.stringify(data));
    },
    create(record: RecordItem) {
        const record2 = clone(record);
        record2.createAt = new Date();
        this.data.push(record2);
    }

}
export default recordListModel 