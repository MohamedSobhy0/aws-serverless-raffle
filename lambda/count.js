import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event, context) => {
    console.log("---devops---start-handler");
    console.log("---devops---event", event);
    let TableName = "devops_raffle";
    try {
        const command = new ScanCommand({
            TableName: TableName,
            Select: "COUNT"
        });

        const response = await client.send(command);

        console.log("---devops---count", response);
        return response.Count;
    } catch (e) {
        console.log("---devops---e", e);
        return e.message;
    }
};

