"use client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { createOnRampTransaction } from "../app/lib/actions/createOnRamptxn";

const SUPPORTED_BANKS = [
  {
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com",
  },
  {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/",
  },
];

export const AddMoney = () => {
  const [redirectUrl, setRedirectUrl] = useState(
    SUPPORTED_BANKS[0]?.redirectUrl
  );
  const [amount, setAmount] = useState(0);
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  return (
    <Card title="Add Money">
      <div className="w-full pt-2">
        <TextInput
          label={"Amount"}
          placeholder={"Amount"}
          onChange={(value) => {
            setAmount(value);
          }}
        />
        <div className="pt-4 pb-2 text-left">Bank</div>
        <Select
          onSelect={(value) => {
            setRedirectUrl(
              SUPPORTED_BANKS.find((x) => x.name === value)?.redirectUrl || ""
            );
            setProvider(
              SUPPORTED_BANKS.find((x) => x.name === value)?.name || ""
            );
          }}
          options={SUPPORTED_BANKS.map((x) => ({
            key: x.name,
            value: x.name,
          }))}
        />
        <div className="flex justify-center pt-8">
          <Button
            onClick={async () => {
              await createOnRampTransaction(amount * 100, provider);
              window.location.href = redirectUrl || "";
            }}
          >
            <div className="flex items-center gap-x-1">
              Add Money
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-4"
              >
                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </Card>
  );
};
