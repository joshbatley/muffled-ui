import { ClickableElement } from '../../inputs';
import { Box } from '../../data';
import { Tab } from '../../types/Tabs';

export type TabItemProps = {
  selected?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export const TabItem: React.FC<TabItemProps> = ({ children, selected, onClick }) => (
  <ClickableElement
    padding="1 3"
    position="relative"
    boxShadow={selected ? 'base.1' : 'none'}
    bg={selected ? 'background' : 'transparent'}
    color={selected ? 'foreground' : 'mutedForeground'}
    onClick={onClick}
    borderRadius={3}
    mr={{ '': 1, '&:last-of-type': 0 }}
    outline={{ '&:focus': '0' }}
    style={{ scrollSnapAlign: 'start' }}
  >
    {children}
  </ClickableElement>
);

export type TabItemsProps = {
  tabs: Tab[];
  selected: string | number;
  onChange: any;
};

export const TabItems: React.FC<TabItemsProps> = ({ tabs, selected, onChange }) => (
  <Box bg="muted" borderRadius={4} p="3px" display="inline-flex" border="muted.1">
    {tabs.map(({ tab, key }) => (
      <TabItem
        key={key}
        selected={selected === key}
        onClick={() => onChange(key)}
      >{tab}</TabItem>
    ))}
  </Box>
);
