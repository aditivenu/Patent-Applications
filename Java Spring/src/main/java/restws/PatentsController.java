package restws;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin()
public class PatentsController {
	
    @RequestMapping("/patents")
    
    public USPTOData patents(@RequestParam(value="rows", defaultValue="100", required=false) int rows,
    		                 @RequestParam(value="assignee", required=false) String assignee,
    		                 @RequestParam(value="title", required=false) String title,
    		                 @RequestParam(value="applicationNumber", required=false) String applicationNumber,
    		                 @RequestParam(value="applicationType", required=false) String applicationType,
    						 @RequestParam(value="searchText", required=false) String searchText)
     	                 
    {	
    	
    	StringBuilder sb = new StringBuilder();
    	sb.append("rows="+Integer.toString(rows));
    	if(assignee!=null && !assignee.isEmpty())
    	{
    		sb.append("&assignee="+assignee);
    	}
    	if(title!=null && !title.isEmpty())
    	{
    		sb.append("&title="+title);
    	}
    	if(applicationNumber!=null && !applicationNumber.isEmpty())
    	{
    		sb.append("&applicationNumber="+applicationNumber);
    	}
    	if(applicationType!=null && !applicationType.isEmpty())
    	{
    		sb.append("&applicationType="+applicationType);
    	}
    	if(searchText!=null && !searchText.isEmpty())
    	{
    		sb.append("&searchText="+searchText);
    	}
    	
    	RestTemplate restTemplate = new RestTemplate();
		
    	//issue with this endpoint's data where it is gzip encoded and not type application/json
		restTemplate.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
		
		USPTOData output = restTemplate.getForObject(
				  "https://developer.uspto.gov/ibd-api/v1/patent/application?"+sb.toString(),USPTOData.class);
		
		return output;
    }
    
    
    @RequestMapping("/patents/bycompany")
    
    public Company patentsbycompany() 
    {	
    	String[] companynames={"QUALCOMM","APPLE", "MICROSOFT", "GOOGLE"};
    	Company c = new Company();
    	
    	for(int i=0;i<companynames.length;i++)
    	{
    		String assignee=companynames[i];
    		
    		RestTemplate restTemplate1 = new RestTemplate();
    		
        	//issue with this endpoint's data where it is gzip encoded and not type application/json
    		restTemplate1.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
    		
    		USPTOData output1 = restTemplate1.getForObject(
    				    "https://developer.uspto.gov/ibd-api/v1/patent/application?assignee="+assignee,USPTOData.class);
    		
    		c.companies.add(assignee);
			c.numOfPatents.add(output1.response.numFound);
    		
    	}
    	
		return c;
    }
    
    
    
    @RequestMapping("/patents/search")
    
    public Search patentssearch() 
    {	
    	String[] searchstring={"5G","4G", "3G", "2G"};
    	Search s = new Search();
    	
    	for(int i=0;i<searchstring.length;i++)
    	{
    		String str=searchstring[i];
    		
    		RestTemplate restTemplate2 = new RestTemplate();
    		
        	//issue with this endpoint's data where it is gzip encoded and not type application/json
    		restTemplate2.setRequestFactory(new HttpComponentsClientHttpRequestFactory());
    		
    		USPTOData output2 = restTemplate2.getForObject(
    				    "https://developer.uspto.gov/ibd-api/v1/patent/application?searchText="+str,USPTOData.class);
    		
    		s.searchStr.add(str);
			s.numOfPatents.add(output2.response.numFound);
    		
    	}
    	
		return s;
    }
	
}
		
