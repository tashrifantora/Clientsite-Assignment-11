import { useLoaderData } from "react-router-dom";
import FeaturedBlog from "../FeaturedBlog/FeaturedBlog";



const FeatureBlogs = () => {
    const featureAllBlogs = useLoaderData([]);

    return (
        <div>
            <div>
                {
                    featureAllBlogs.map(featuredBlogs => <FeaturedBlog
                        key={featuredBlogs._id}
                        featuredBlogs={featuredBlogs}
                    ></FeaturedBlog>)
                }
            </div>
        </div >

    );
};

export default FeatureBlogs;

/* 
// import { Paper, Table, TableCell, TableContainer, TableRow } from "@mui/material";
// import { TableBody, TableHead } from "mui-datatables";

  {<TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">BlogTitle</TableCell>
                            <TableCell align="right">BlogOwner</TableCell>
                            <TableCell align="right">Carb</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {featureAllBlogs?.map(featuredBlogs => (
                            <TableRow
                                key={featuredBlogs._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{featuredBlogs.title}</TableCell>
                                <TableCell align="right">{featuredBlogs.category}</TableCell>


                            </TableRow>

                        ))}
                    </TableBody>

                </Table >
            </TableContainer >}
*/