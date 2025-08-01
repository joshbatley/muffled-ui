import { Box } from '../../data';

export type AddonElementProps = {
  addon: React.ReactNode;
  left?: boolean;
  right?: boolean;
};

export const AddonElement: React.FC<AddonElementProps> = ({
  addon, left, right,
}) =>
  addon ? (
    <Box
      bg="offsetBackground"
      borderRight={right ? 'none' : 'border.1'}
      borderLeft={left ? 'none' : 'border.1'}
      display="flex"
      alignItems="center"
      zIndex={{ '&:focus': 0 }}
      outline={{ '&:focus': 'none', 'button:focus': 'none' }}
      boxShadow={{ 'button:focus': 'none' }}
      opacity={{ '&:hover': 0.8 }}
    >
      {addon}
    </Box>
  ) : null;
