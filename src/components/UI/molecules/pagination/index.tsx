import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

type PaginationProps = {
	count: number | undefined;
	countPerPage: number;
	setCurrentPage: (page: number) => void;
};

export const Pagination = ({
	count,
	countPerPage,
	setCurrentPage,
}: PaginationProps) => {
	const router = useRouter();
	const currentPage = +(router.query?.page || 1);
	let pages = [1];

	const maxLimit = Math.ceil(count ? count / countPerPage : 0);
	const limit = Math.min(Math.max(currentPage, 2) + 1, maxLimit);
	for (let i = Math.max(currentPage, 2); i <= limit; i++) {
		pages.push(i);
	}
	let direction = 6;
	if (!pages.includes(maxLimit)) {
		pages.push(maxLimit);
	}
	let i = currentPage;
	while (pages.length < 6 && i > 1) {
		if (!pages.includes(i)) pages.push(i);
		i--;
		direction = 0;
	}
	pages.sort((a, b) => a - b);

	if (maxLimit < 2) {
		return <></>;
	}

	return (
		<div className="py-5 m-auto inline">
			{pages.map((page, index) => {
				return (
					<Link
						key={index}
						href={{
							pathname: router.pathname,
							query: {
								...router.query,
								page,
							},
						}}
					>
						
						<button
							className={`hover:text-white  hover:bg-secondary  mr-4 w-10 h-10 ${
								page === currentPage
									? 'text-white bg-primery'
									: ''
							} `}
							onClick={() => {
								setCurrentPage(page);
							}}
						>
							0{page}
						</button>
					</Link>
				);
			})}
		</div>
	);
};
