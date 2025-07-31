import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/voluntaryWork.css";

const GalleryContainer = styled.div`
	background: linear-gradient(to bottom, #fff5f7, #ffffff);
	padding: 2rem 0;
`;

const ContentWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1.5rem;
`;

const ArticlesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin: 2rem 0;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const ArticleCard = styled.div`
	background: white;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
	}
`;

const ImageContainer = styled.div`
	position: relative;
	aspect-ratio: 4/3;
	overflow: hidden;
`;

const ArticleImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;

	${ArticleCard}:hover & {
		transform: scale(1.05);
	}
`;

const ArticleContent = styled.div`
	padding: 1.5rem;
`;

const Categories = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

const Category = styled.span`
	background: #ff3366;
	color: white;
	padding: 0.25rem 0.75rem;
	border-radius: 999px;
	font-size: 0.875rem;
`;

const ArticleTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: #1a202c;
	margin: 0;
`;

const VoluntaryWork = () => {
	const voluntaryWork = [
		{
			id: 1,
			image: "/api/placeholder/400/300",
			title: "Timeline of Key Development Events in Nigeria",
			categories: ["Papers"],
		},
		{
			id: 2,
			image: "/api/placeholder/400/300",
			title: "Why Science Needs Women: More Than Just Doing the Right Thing",
			categories: ["Career", "Coaching", "Tech & Me"],
		},
		{
			id: 3,
			image: "/api/placeholder/400/300",
			title: "The Gibbs Reflective Cycle: Reinventing",
			categories: ["Coaching", "Lifestyle"],
		},
	];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Voluntary Work | ${INFO.main.title}`}</title>
				<meta
					name="description"
					content="View my voluntary work and community impact"
				/>
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<GalleryContainer>
						<ContentWrapper>
							<ArticlesGrid>
								{voluntaryWork.map((work) => (
									<ArticleCard key={work.id}>
										<ImageContainer>
											<ArticleImage
												src={work.image}
												alt={work.title}
											/>
										</ImageContainer>
										<ArticleContent>
											<Categories>
												{work.categories.map(
													(category) => (
														<Category
															key={category}
														>
															{category}
														</Category>
													)
												)}
											</Categories>
											<ArticleTitle>
												{work.title}
											</ArticleTitle>
										</ArticleContent>
									</ArticleCard>
								))}
							</ArticlesGrid>
						</ContentWrapper>
					</GalleryContainer>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default VoluntaryWork;
