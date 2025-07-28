'use client';

import { Button, cn } from '@heroui/react';
import { Card, Collapse, LinearProgress, linearProgressClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronUp, Hourglass } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';

export interface GlobalUserStatsBarProps {
  joined: number;
  total: number;
}

export const GlobalUserStatsBar: React.FC<GlobalUserStatsBarProps> = ({ joined, total }) => {
  const [expanded, setExpanded] = useState(false);
  const percent = Math.min(100, (joined / total) * 100);

  return (
    <div className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-40 max-w-screen-sm p-2">
      <Card
        onClick={() => setExpanded(!expanded)}
        sx={{
          cursor: 'pointer',
          borderRadius: 3,
          py: 1,
          px: 1,
          boxShadow: '0px 0px 24px 5px #4141f926',
          backgroundColor: 'background.paper',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        <div className="flex justify-between w-full pb-1">
          <div className="flex gap-1 items-center text-gray-500">
            <ChevronUp
              size={16}
              className={cn(
                'transform transition-transform duration-300',
                expanded ? '-rotate-180' : 'rotate-0'
              )}
            />
            <span className="text-sm">
              {joined} نفر پیوستن از {total} نفر
            </span>
          </div>
          <Button
            variant="flat"
            color="primary"
            size="sm"
            className="rounded-2xl shrink-0"
            as={Link}
            href="/referral"
          >
            مشاهده
          </Button>
          {/* <span className="text-sm text-gray-500">{Math.round(percent)}%</span> */}
        </div>
        <BorderLinearProgress variant="determinate" value={percent} />
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div className=" flex justify-start items-center">
            <div className="text-sm text-gray-500 flex items-center gap-1 pt-2 ">
              <div className="bg-primary-50 rounded-lg w-7 h-7 p-1 flex justify-center items-center">
                <Hourglass size={16} className="text-primary" />
              </div>
              <span>{total - joined} نفر تا باز شدن قابلیت‌های جدید مانده است.</span>
            </div>
          </div>
        </Collapse>
      </Card>
    </div>
  );
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  border: '1px solid #ccc',
  backgroundColor: theme.palette.grey[300],
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundImage: 'linear-gradient(to right, rgba(255,159,52,1), #4141F9)',
  },
}));
