'use server'
import { getSheetsData } from "./_lib/readSheet";
export async function createRow(prevState, formData) {
    const data = await getSheetsData(formData.get("name"));
    if(data == 200){
        return {
            success: true,
            name: formData.get("name")
        }
    } else {
        return {
            success: false
        }
    }
}