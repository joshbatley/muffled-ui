import { default as SH } from 'react-syntax-highlighter';
import { githubLight, githubDark } from './theme';
import { Wrapper } from './Wrapper';
import { useMuffledSettings } from '../../utils';

export type SyntaxHighlighterProps = {
  code: string;
  language: string;
  light?: boolean;
  withWrapper?: boolean;
};

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  language, code, withWrapper = true,
}) => {
  let { theme } = useMuffledSettings();
  return (
    <Wrapper skip={!withWrapper}>
      <SH language={language} style={theme === 'Light' ? githubLight : githubDark}>
        {code}
      </SH>
    </Wrapper>
  );
};
