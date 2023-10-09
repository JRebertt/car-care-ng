import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const labels = [
  {
    value: "paymented",
    label: "Pago",
  },
  {
    value: "negotiating",
    label: "Negociação",
  },
  {
    value: "installments",
    label: "Parcelado",
  },
]

export const statuses = [
  {
    value: "pending",
    label: "Pendente",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "in progress",
    label: "Em Progresso",
    icon: StopwatchIcon,
  },
  {
    value: "completed",
    label: "Completo",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Cancelado",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Baixa",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Media",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "Alta",
    value: "high",
    icon: ArrowUpIcon,
  },
]