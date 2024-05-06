"use server";
import { getSheetsData } from "./../_lib/readSheet";

export async function createRow(prevState, queryData) {
    const data = await getSheetsData(formData.get("name"));
    if (data == "200") {
        return {
            success: true,
            message: "Yey",
        };
    }
}
export async function addToCart(prevState, queryData) {
    const itemID = queryData.get('itemID');
    if (itemID === "1") {
      return {
        success: true,
        cartSize: 12,
      };
    } else {
      return {
        success: false,
        message: "The item is sold out.",
      };
    }
  }