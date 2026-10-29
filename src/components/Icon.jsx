import {
  AtSign,
  Compass,
  GitBranch,
  ListChecks,
  MessageCircle,
  Plug,
  Ruler,
  ScanSearch,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from 'lucide-react';

const icons = {
  AtSign,
  Compass,
  GitBranch,
  ListChecks,
  MessageCircle,
  Plug,
  Ruler,
  ScanSearch,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Workflow,
  Zap,
};

/** Resolve ícones referenciados por nome nos arquivos de conteúdo. */
export default function Icon({ name, size = 22, strokeWidth = 1.75, ...rest }) {
  const Cmp = icons[name] || Sparkles;
  return <Cmp size={size} strokeWidth={strokeWidth} aria-hidden="true" {...rest} />;
}
