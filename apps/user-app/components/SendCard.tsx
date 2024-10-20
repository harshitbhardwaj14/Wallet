"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTrasnfer";

export default function Example() {
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <Center>
      <Card title="Pay a Person">
        <div className="min-w-72 py-2 space-y-4 mt-2">
          <TextInput
            placeholder={"Enter the Number"}
            label="Number"
            onChange={(value) => {
              setNumber(value);
            }}
          />
          <TextInput
            placeholder={"Enter the Amount"}
            label="Amount"
            onChange={(value) => {
              setAmount(value);
            }}
          />
        </div>
        <div className="flex justify-center pt-6">
          <Button
            onClick={async () => {
              await p2pTransfer(number, Number(amount) * 100);
            }}
          >
            <div className="flex items-center gap-x-1">
              Send Money
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </Button>
        </div>
      </Card>
    </Center>
  );
}
