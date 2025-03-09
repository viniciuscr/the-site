'use client'

import { Button, Tooltip } from "@mantine/core"

const PrintPDFButton = () =>
(
    <Tooltip label="This will trigger your browser to print the page, I suggest to save it as PDF and save some trees.">
        <Button
            onClick={() => window.print()}
            variant="gradient"
            gradient={{ deg: 133, from: "blue", to: "cyan" }}
            size="lg"
            radius="md"
            mt="xl"
        >
            Print to PDF
        </Button>
    </Tooltip>
)

export default PrintPDFButton;