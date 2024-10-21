import Example from "../../../components/SendCard";
import { P2PTransactions } from "../../../components/P2PTransactions";
import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@repo/db/client";

async function getP2PTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      OR: [
        {
          fromUserId: Number(session?.user?.id),
        },
        {
          toUserId: Number(session?.user?.id),
        },
      ],
    },
  });
  return txns.map((t) => {
    if (t.fromUserId == session?.user?.id) {
      return {
        time: new Date(t.timestamp),
        amount: t.amount,
        type: "DEBIT",
        userId: t.toUserId,
      };
    } else if (t.toUserId == session?.user?.id) {
      return {
        time: new Date(t.timestamp),
        amount: t.amount,
        type: "CREDIT",
        userId: t.fromUserId,
      };
    }
  });
}

export default async function () {
  const transactions = await getP2PTransactions();

  return (
    <div className="w-screen">
      <div className="text-4xl text-[#b198ec] pt-8 mb-8 font-bold">P2P</div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 p-4">
        <div>
          <Example />
        </div>
        <div className="">
          <P2PTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
