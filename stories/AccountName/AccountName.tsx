import React from 'react';

export interface AccountNameProps {
  name?: string;
}

export const AccountName = (props: AccountNameProps) => {
  const { name } = props;
  return (
    <p className="text-center text-sm text-nowrap relative">
      {name ?? 'کاربر عزیز'}
    </p>
  );
};
