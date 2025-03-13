import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { formatAmount, formatDateTime } from "@/lib/utils"

// const CategoryBadge = ({ category }: CategoryBadgeProps) => {
//   const {
//     borderColor,
//     backgroundColor,
//     textColor,
//     chipBackgroundColor,
//   } = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default

//   return (
//     <div className={cn('category-badge', borderColor, chipBackgroundColor)}>
//       <div className={cn('size-2 rounded-full', backgroundColor)} />
//       <p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
//     </div>
//   )
// }

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Account</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          {/* <TableHead className="px-2">Status</TableHead> */}
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 ">Recipient</TableHead>
          {/* <TableHead className="px-2 max-md:hidden">Category</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const amount = formatAmount(t.amount)

          const isDebit = t.type === 'debit';
          const isCredit = t.type === 'credit';

          return (
            <TableRow key={t.id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}>
              <TableCell className="max-w-[250px] pl-2 pr-10">
                <div className="flex flex-col items-start gap-3">
                  <h1 className="text-14 truncate font-semibold text-[#344054]">
                    {t.accountName}
                  </h1>
                  <h1 className="text-sm truncate  text-[#344054]">
                    {t.note}
                  </h1>
                </div>
              </TableCell>

              <TableCell className={`pl-2 flex flex-col pr-10 font-semibold ${isDebit || amount[0] === '-' ?
                'text-[#f04438]'
                : 'text-[#039855]'
                }`}>
                <p> {isDebit ? `-${amount}` : isCredit ? amount : amount}</p>
                <p className=" text-blue-600">{formatAmount(t.availableBalance)}</p>

              </TableCell>

              {/* <TableCell className="pl-2 pr-10">
                <CategoryBadge category="approved" />
              </TableCell> */}

              <TableCell className="min-w-32 pl-2 pr-10">
                {formatDateTime(new Date(t.date)).dateOnly}
              </TableCell>

              <TableCell className="pl-2 pr-10 capitalize min-w-24">
                {t.receiverName}
              </TableCell>

              {/* <TableCell className="pl-2 pr-10 max-md:hidden">
               <CategoryBadge category={t.category} /> 
              </TableCell> */}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TransactionsTable