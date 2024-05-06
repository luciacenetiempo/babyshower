import { google } from "googleapis"

export const getSheetsData = async (nomecognome) => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: 'babyshower@babyshower-422414.iam.gserviceaccount.com',
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQChAj0G7SwYUMpI\n1SBwG5m7KBfEDq3CMkgjV3jqDadyWM/JQWQae6AHngwgN5i90/DT79g/YqZZYBrA\nc+fraBn58fgRRZhFYz60u4PVzsKD5tfzMVaBX46KFo1V9aCiU8MZ9aiaj9Z6/YUG\n3nlNPnpD4TvFciFTkGf3D7VCj/Zb6YY2E+u8XQtizPbyQ6V29du95jHYun22Hjdj\ngIYKY4J/vG0ugP3+Q+C7y8dw+0f1xKfsnYGX4yXf4v7Arv0Kci3Sp/up9P1McOTD\nQnnjD6mWNvWWkXgKA2MjyhTtJfJGQ0wPLWvlwBlFLMu1omaj9Dt1Qlym5XY9NAgL\ngnXskfPHAgMBAAECggEADAlyTYfCoai8jrhcPfVaR1smd7JPPDLtILND51+Q8qQA\nGMAqPy6Z1qfyqR/u69Yh7X5DUO3LmOft6BBiOL+mHYEA9i2ZRiq2v+U65GuaMCk8\nYMKCAJcHvXwVIeWElk4jyleKvM9fDf/RB6PvNp6inluCz+6J3kjv9ND4UJsZpGJQ\n6f91B5uBIa1GBGq4E0ORjJ3RuUcLP4493v/c3cZeaWW5o9/4UYvBMnc979fcj8iF\nARDeyk6v5sKh05BfEpkCn2gdr9Pnt9UdIZt4QSaq8u79AiegtFxHtdUqTbBum7Jm\nOUCn3oQIHZRq+F8V48u31OHoP9IJgIK0FxP2icQDDQKBgQDjCzgCEZahaqNULnwi\ntjknn9chmdgtGFsJlRLZCxuCELjxTrL9NoWod473eIHjqW4uWRrKf/y3xscf0b5B\nZ+PsHnlv7Cb87114SOvcBkyM4DePAoIiGyLfzNFvVUMxPoKxvLt998rAN+AXGVT2\nM6ynidqtBYRQSCQC3vs2hqjuJQKBgQC1iwhFkmYGodmoHEdkwxtkCMYUB1qsBdhs\nJ4dqgGfJRQX9bGeBDcEow0mDp5ny2voHe75JuW7RgcOq/IPcyhQi6Bsn+PkoX/Vb\nCncfnpakWOQaXSn26qvyFATkdTtGyLz5v8jyIG/yN7meVjtmNCj6iKO9pc5IOx6R\nDykw8F7oewKBgQDh2+g0jqClJPsjpDaTJWlIFMcjQvL9MUxnBOhCB72ursn8K0j9\ngj6GL6GGZ1f3TTYxXyy6o4WYoGK4MaOtVxcybcJqZ6cFWW1HWmtfbti6D9bVKi6g\nlRQlRJBXy57THxdOjqyJjHYir7L555ZQcWlhJU7nbiSI5KsGPCH1xRHKDQKBgBA6\n3MNzgiGHqLDJzmwosTMxQZwayDVm1GFe61FPJ3gr7owoe9xiwWkGhHT7r9yxTPcM\nTgfDRy/9vON1bch4XHJ+c6cQMB427fV0qw+tmuQYelQNDipf8n1S4tkVzfXXDmX5\nilpzIe7yomqQZQEPGrbDLnhO8XEtr97iDxmr86AvAoGBAIoe11C7JV+0ajgc1O3H\nHLqWj3Rg21KOm3ezMLin1tsTOJASgnWBjGGJsneCaUobn7trIyWd0lGzmoweuikI\neX7u0ZS2ph1eWY12tjz57eeoUJfSXhdtsQ/fa3oSA4XdDV0eZMje6jNiu7o70Q83\ntkv84jDBeeN4y6Py07W30AjZ\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const sheets = google.sheets(
        {
            version: "v4",
            auth: await auth.getClient()
        }
    )
    const range = "Foglio1!A:Z"
    const date = function getFormattedDate() {
        const now = new Date();
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0'); // getMonth() ritorna il mese da 0 (gennaio) a 11 (dicembre)
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
    
        return `${day}-${month}-${year} ${hours}:${minutes}`;
    }
    try{
        var request = {
            spreadsheetId: '1s5sQLoikSW0C1cWmpLHoonD_82nZsvXO_kKcNqq3qhU',
            range: "Foglio1!A:Z",
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            resource: {
                "majorDimension": "ROWS",
                "values": [[nomecognome, 'confermato', date()]]
            },
        }
        const response = await sheets.spreadsheets.values.append(request)
        return response.status 
    } catch(err){
        return []
    } 
}  