'use client'

import {
  CircleCheck,
  Info,
  LoaderCircle,
  OctagonX,
  TriangleAlert,
} from 'lucide-react'
import { Toaster as Sonner, toast } from 'sonner'
import { useMuffledSettings } from '@/components/utils/ThemeProvider.tsx'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useMuffledSettings()
  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      icons={{
        success: <CircleCheck className="h-4 w-4" />,
        info: <Info className="h-4 w-4" />,
        warning: <TriangleAlert className="h-4 w-4" />,
        error: <OctagonX className="h-4 w-4" />,
        loading: <LoaderCircle className="h-4 w-4 animate-spin" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            'group toast border-border shadow-lg px-4 py-3 border rounded-lg flex items-center gap-4 w-80 bg-background',
          description: '!text-muted-foreground',
          error: 'bg-destructive',
          actionButton:
            'bg-primary text-primary-foreground',
          cancelButton:
            'bg-muted text-muted-foreground',
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }

///    padding: 16px;
//     background: var(--normal-bg);
//     border: 1px solid var(--normal-border);
//     color: var(--normal-text);
//     border-radius: var(--border-radius);
//     box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
//     width: var(--width);
//     font-size: 13px;
//     display: flex;
//     align-items: center;
//     gap: 6px;
// }
