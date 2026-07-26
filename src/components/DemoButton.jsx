import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getNetworkErrorMessage, launchDemo } from '../lib/demo.js';

export default function DemoButton({
  children,
  onClick,
  disabled = false,
  loadingLabel,
  ...props
}) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleClick = async (event) => {
    if (loading || disabled) return;

    onClick?.(event);
    setLoading(true);
    try {
      await launchDemo();
    } catch (err) {
      setLoading(false);
      window.alert(getNetworkErrorMessage(err));
    }
  };

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading ? (loadingLabel || t('demoButton.loading')) : children}
    </button>
  );
}
