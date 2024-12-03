"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
	const [selectedImages, setSelectedImages] = useState<string[]>([]);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const imageUrls = Array.from(event.target.files).map((file) =>
				URL.createObjectURL(file),
			);
			setSelectedImages(imageUrls);
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		alert(`Form submitted with images: ${selectedImages.join(", ")}`);
	};

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h1
						style={{
							margin: 0,
							width: "100%",
							textAlign: "center",
							color: "white",
						}}
					>
						Preview Form
					</h1>
					<form
						onSubmit={handleSubmit}
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<input
							type="file"
							accept="image/*"
							multiple
							onChange={handleImageChange}
							style={{ display: "none" }}
							id="fileInput"
						/>
						<label
							htmlFor="fileInput"
							style={{
								padding: "10px 20px",
								display: "inline-block",
								width: "100%",
								borderRadius: "5px",
								backgroundColor: "#007bff",
								textAlign: "center",
								color: "white",
								cursor: "pointer",
							}}
						>
							画像を追加する
						</label>
					</form>
				</div>
				{selectedImages.length > 0 && (
					<div
						style={{
							overflow: "hidden",
						}}
					>
						<h2>Selected Images</h2>
						<div
							style={{
								overflowY: "auto", 
								maxHeight: "600px",
							}}
						>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(3, 1fr)",
									gap: "10px",
								}}
							>
								{selectedImages.map((image, index) => (
									<div
										key={image}
										style={{
											position: "relative",
											listStyleType: "none",
											width: "100%",
											paddingBottom: "100%", // 正方形にするための高さ
										}}
									>
										<Image
											src={image}
											alt={`Selected ${index}`}
											fill
											style={{ objectFit: "cover" }}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
