import axios from "axios"

class BlogController{
    static getAllBlogs = () => {
        return new Promise((resolve, reject) => {
          axios
            .get(`https://strapi-towards-research-public-production.up.railway.app/api/blogs?populate=*`, {
              headers: {
                Authorization: "bearer 1451c6b1fb50b48ad56ba5d3727da8bed697cb25c3eafcc776c8423802f772790ee25cbc9f19572ac9e5b5e274b4b60d84cbb1766e111f9c19123f137155edc0018de475f25332b0b3fc8803393a8f62fb2c77848465f717e84b18ceeef26cdff993ef11b05f506fdf3a6c6ae3cd8ed9e7b906fecd44a1adb47771c09a301f22",
              },
            })
            .then((res) => {
              console.log("@res blogs...", res?.data);
              if (res) {
                resolve(res?.data);
              }
              reject(res);
            })
            .catch((err) => {
              reject("Network Error");
            });
        });
      };

      static getFeaturedBlogs = (v1, v2) => {
        return new Promise((resolve, reject) => {
          axios
            .get(
              `https://strapi-towards-research-public-production.up.railway.app/api/blogs?filters[isFeatured][$eq]=${v1}&filters[category][$eq]=${v2}&&populate=*`,
              {
                headers: {
                  Authorization: "bearer 1451c6b1fb50b48ad56ba5d3727da8bed697cb25c3eafcc776c8423802f772790ee25cbc9f19572ac9e5b5e274b4b60d84cbb1766e111f9c19123f137155edc0018de475f25332b0b3fc8803393a8f62fb2c77848465f717e84b18ceeef26cdff993ef11b05f506fdf3a6c6ae3cd8ed9e7b906fecd44a1adb47771c09a301f22",
                },
              }
            )
            .then((res) => {
              console.log("@res Featured blogs...", res?.data);
              if (res) {
                resolve(res?.data?.data);
              }
              reject(res);
            })
            .catch((err) => {
              reject("Network Error");
            });
        });
      };
}

export default BlogController