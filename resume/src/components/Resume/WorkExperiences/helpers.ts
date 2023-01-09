export async function getCompanyLogo(
  companyName: string,
  apiKey: string
): Promise<string> {
  try {
    // Make a request to LinkedIn's API to search for the company
    const response = await fetch(
      `https://api.linkedin.com/v2/search?q=${companyName}&type=organization`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const data = await response.json();

    // Get the first result from the search
    const company = data.organizations.elements[0];
    const logo = company.logoV2.original.url;
    // Return the company logo URL
    console.log(logo);
    return logo;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
