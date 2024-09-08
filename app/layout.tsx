"use client"
import "./globals.scss";
import Layout from "@/components/common/layout";
import ClickScrollToTop from "@/components/common/scrollToTop";
import ProgressBar from "@/components/common/progressBar";
import { ToastContainer } from "react-toastify";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { setupAxios } from "@/utils/request";
import { useEffect } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(()=>{
    setupAxios()
  },[])
  
  return (
    <html lang="en">
      <body>
        <Provider store={store}>

          <ProgressBar />
          <ToastContainer
            position="top-left"
            autoClose={4000}
            style={{ zIndex: 9999 }}
            hideProgressBar={true}
            newestOnTop={false}
            rtl={false}
            closeOnClick={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <ClickScrollToTop />
          <Layout>
            {children}
          </Layout>
        </Provider>
      </body>
    </html>
  );
}
